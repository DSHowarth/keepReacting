import { QUERY_SCORES } from "../utils/queries";
import { useQuery } from '@apollo/client'

export default function Scores() {
  const { data } = useQuery(QUERY_SCORES);
  console.log(data)
  // Sort the scores from lowest to highest
  // const sortScores = data ? data.scores.sort((a, b) => a.score - b.score) : [];
  // TODO? Limit how many scores are shown
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