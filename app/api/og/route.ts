import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, #EFE4D5 0%, #0C1417 100%)',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#0C1417',
              margin: '0 0 16px 0',
              lineHeight: '1.1',
            }}
          >
            Davo
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#0C1417',
              margin: '0',
              opacity: 0.8,
              maxWidth: '600px',
            }}
          >
            The on-chain coordination layer for robotics
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#FD7600',
              }}
            />
            <span
              style={{
                fontSize: '24px',
                color: '#0C1417',
                opacity: 0.7,
              }}
            >
              Join the waitlist
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
