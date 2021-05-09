const BLOCK_API = 'https://blockchain.info';

export async function getBlockDetail(hash) {
  const response = await fetch(`${BLOCK_API}/rawblock/${hash}?format=json&cors=true`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch at this moment.');
  }
  return data;
}

export async function getTDetail(hash) {
  const response = await fetch(`${BLOCK_API}/rawtx/${hash}?format=json&cors=true`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch at this moment.');
  }
  return data;
}

export async function getBlocks() {
  const response = await fetch(`${BLOCK_API}/blocks?format=json&cors=true`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch at this moment.');
  }
  return data;
}

export async function getLatestBlock() {
  const response = await fetch(`${BLOCK_API}/latestblock?format=json&cors=true`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch at this moment.');
  }
  return data;
}