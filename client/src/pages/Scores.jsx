import { QUERY_SCORES } from "../utils/queries";
import { useQuery } from '@apollo/client'

export default function Scores() {
  const { data, loading } = useQuery(QUERY_SCORES);
  // TODO? Limit how many scores are shown

  if (loading) {
    return (
      <h2>Loading</h2>
    )
  }
  return (
    <>
      <h2>Top Scores</h2>
      {data ? (data.scores.map((score) => (
        <div className="flex-row" key={score._id}>
          <h3>{score.user.username}: </h3>
          <h3>{score.score}</h3>
          <h3>With help from {score.teammates}</h3>
        </div>
      ))
      ) : null}
    </>
  )
}