import Card from '@/app/components/Card'

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-8 gap-4 p-4">
      <Card value="100,00" text="Daily Revenue" percent="+18" />
      <Card value="1200,00" text="Daily Orders" percent="+18" />
      <Card value="134,00" text="Daily Customers" percent="+14" />
      <Card value="566,00" text="Daily Revenue" percent="-17" />
    </div>
  )
}

export default TopCards
