import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { PlatformError } from '../types';

/**
 * Utility functions for blockchain operations
 */

/**
 * Execute operation with retry logic for blockchain interactions
 */
export async function executeWithRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (error instanceof PlatformError && error.retryable && attempt < maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new PlatformError(
    'MAX_RETRIES_EXCEEDED',
    'Maximum retry attempts exceeded',
    'blockchain',
    false
  );
}

/**
 * Validate Solana public key
 */
export function validatePublicKey(address: string): boolean {
  try {
    new PublicKey(address);
    return true;
  } catch {
    return false;
  }
}

/**
 * Convert lamports to SOL
 */
export function lamportsToSol(lamports: number): number {
  return lamports / 1_000_000_000;
}

/**
 * Convert SOL to lamports
 */
export function solToLamports(sol: number): number {
  return Math.floor(sol * 1_000_000_000);
}

/**
 * Get transaction fee estimate
 */
export async function estimateTransactionFee(
  connection: Connection,
  transaction: Transaction
): Promise<number> {
  try {
    const { feeCalculator } = await connection.getRecentBlockhash();
    return feeCalculator.lamportsPerSignature * transaction.signatures.length;
  } catch (error) {
    throw new PlatformError(
      'FEE_ESTIMATION_FAILED',
      'Failed to estimate transaction fee',
      'blockchain',
      true
    );
  }
}

/**
 * Wait for transaction confirmation
 */
export async function waitForConfirmation(
  connection: Connection,
  signature: string,
  commitment: 'processed' | 'confirmed' | 'finalized' = 'confirmed'
): Promise<void> {
  const latestBlockhash = await connection.getLatestBlockhash();
  
  try {
    await connection.confirmTransaction(
      {
        signature,
        ...latestBlockhash,
      },
      commitment
    );
  } catch (error) {
    throw new PlatformError(
      'TRANSACTION_CONFIRMATION_FAILED',
      `Transaction confirmation failed: ${signature}`,
      'blockchain',
      true
    );
  }
}

/**
 * Batch array into smaller chunks
 */
export function batchArray<T>(array: T[], batchSize: number): T[][] {
  const batches: T[][] = [];
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }
  return batches;
}

/**
 * Sleep utility for delays
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}