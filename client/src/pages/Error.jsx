import { useLocation } from "react-router-dom";

export default function Error() {
  let location = useLocation();
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card bg-dark card-rounded w-50 justify-content">
          <div className="card-header rounded bg-white text-center">
            <h1>
              <span className="text-primary">{location.pathname}</span> not found
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}