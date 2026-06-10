import { useParams } from 'react-router-dom';

function SquadDetailPage() {
  const { squadId } = useParams();

  return (
    <section className="page-section">
      <p className="page-section__kicker">Squad Detail</p>
      <h2>스쿼드 상세</h2>
      <p>선택한 스쿼드의 상세 정보를 보여주는 페이지입니다.</p>
      <p className="page-section__meta">스쿼드 ID: {squadId}</p>
    </section>
  );
}

export default SquadDetailPage;
