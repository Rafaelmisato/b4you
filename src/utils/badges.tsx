import toLowerCase from '../utils/toLowerCase'
import { Background } from '../components/sidebar/styles'

export default function badges(badge: string) {
  const badgeLower = toLowerCase(badge)

  if (badgeLower === 'rhino') {
    return (
      <div style={{ display: 'flex' }}>
        <span
          style={{
            background: '#0075FF',
            borderRadius: '16px',
            display: 'flex',
            width: '66px',
            height: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a152d',
            fontSize: '10px',
            marginRight: '8px'
          }}
        >
          RHINO
        </span>
        <img src="/badges/rhino.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/wolfnofill.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/eaglenofill.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/lionnofill.svg" style={{ marginRight: '8px' }} />
      </div>
    )
  }

  if (badgeLower === 'wolf') {
    return (
      <div style={{ display: 'flex' }}>
        <span
          style={{
            background: '#4FF08F',
            borderRadius: '16px',
            display: 'flex',
            width: '66px',
            height: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a152d',
            fontSize: '10px',
            marginRight: '8px'
          }}
        >
          WOLF
        </span>
        <img src="/badges/rhino.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/wolf.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/eaglenofill.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/lionnofill.svg" style={{ marginRight: '8px' }} />
      </div>
    )
  }

  if (badgeLower === 'eagle') {
    return (
      <div style={{ display: 'flex' }}>
        <span
          style={{
            background: '#EF4FF0',
            borderRadius: '16px',
            display: 'flex',
            width: '66px',
            height: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '10px',
            marginRight: '8px'
          }}
        >
          EAGLE
        </span>
        <img src="/badges/rhino.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/wolf.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/eagle.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/lionnofill.svg" style={{ marginRight: '8px' }} />
      </div>
    )
  }

  if (badgeLower === 'lion') {
    return (
      <div style={{ display: 'flex' }}>
        <span
          style={{
            background: '#FFDC14',
            borderRadius: '16px',
            display: 'flex',
            width: '66px',
            height: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a152d',
            fontSize: '10px',
            marginRight: '8px'
          }}
        >
          LION
        </span>
        <img src="/badges/rhino.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/wolf.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/eagle.svg" style={{ marginRight: '8px' }} />
        <img src="/badges/lion.svg" style={{ marginRight: '8px' }} />
      </div>
    )
  }
}
