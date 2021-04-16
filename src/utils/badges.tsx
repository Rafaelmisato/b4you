import toLowerCase from '../utils/toLowerCase'

export default function badges(badge: string) {
  const badgeLower = toLowerCase(badge)

  if (badgeLower === 'rhino') {
    return (
      <>
        <img src="/badges/rhino.svg" />
        <img src="/badges/wolfnofill.svg" />
        <img src="/badges/eaglenofill.svg" />
        <img src="/badges/lionnofill.svg" />
      </>
    )
  }

  if (badgeLower === 'wolf') {
    return (
      <>
        <img src="/badges/rhino.svg" />
        <img src="/badges/wolf.svg" />
        <img src="/badges/eaglenofill.svg" />
        <img src="/badges/lionnofill.svg" />
      </>
    )
  }

  if (badgeLower === 'eagle') {
    return (
      <>
        <img src="/badges/rhino.svg" />
        <img src="/badges/wolf.svg" />
        <img src="/badges/eagle.svg" />
        <img src="/badges/lionnofill.svg" />
      </>
    )
  }

  if (badgeLower === 'lion') {
    return (
      <>
        <img src="/badges/rhino.svg" />
        <img src="/badges/wolf.svg" />
        <img src="/badges/eagle.svg" />
        <img src="/badges/lion.svg" />
      </>
    )
  }
}
