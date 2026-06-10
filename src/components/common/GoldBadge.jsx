function GoldBadge({ gold }) {
  return <span className="gold-badge">{Number(gold ?? 0).toLocaleString()} G</span>;
}

export default GoldBadge;
