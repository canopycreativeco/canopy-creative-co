const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwEy4avfNnBxdUieLNZUF3AmXrCqWMDq10r73QJ5vhgzkXWGDoeGvedZGHQnPGG3S9p/exec'

export async function POST(request) {
  try {
    const data = await request.json()

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    // TODO (after May 5): Add Resend email notification here
    // Send to: dave@canopycreativeco.com and hello@canopycreativeco.com
    // Use the same `data` object already assembled above

    return Response.json({ success: true })
  } catch (err) {
    console.error('Intake route error:', err)
    return Response.json({ success: false, error: err.message })
  }
}
