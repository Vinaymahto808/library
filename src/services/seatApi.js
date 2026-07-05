const CABIN_IDS = [
  'A1', 'A2', 'A3', 'A4',
  'B1', 'B2', 'B3', 'B4',
  'C1', 'C2', 'C3', 'C4',
  'D1', 'D2', 'D3', 'D4',
]

const FLOORS = {
  A: 'Ground', B: 'Ground',
  C: 'First',  D: 'First',
}

const STATUSES = ['available', 'occupied', 'reserved']

function randomStatus() {
  const r = Math.random()
  if (r < 0.45) return 'available'
  if (r < 0.80) return 'occupied'
  return 'reserved'
}

function simulateNetwork() {
  return new Promise((resolve) => {
    const delay = 200 + Math.random() * 600
    setTimeout(resolve, delay)
  })
}

export async function fetchSeatData() {
  await simulateNetwork()

  const cabins = CABIN_IDS.map((id) => ({
    id,
    floor: FLOORS[id[0]] || 'Ground',
    status: randomStatus(),
  }))

  return {
    timestamp: Date.now(),
    total: cabins.length,
    available: cabins.filter((c) => c.status === 'available').length,
    occupied: cabins.filter((c) => c.status === 'occupied').length,
    reserved: cabins.filter((c) => c.status === 'reserved').length,
    cabins,
  }
}
