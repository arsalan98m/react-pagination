import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

import FollowerSkeleton from "./FollowerSkeleton";

function App() {
  const { data, loading, error } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);

  useEffect(() => {
    setLoadingSkeleton(true);
    if (loading) return;
    setFollowers(data[page]);

    setTimeout(() => {
      setLoadingSkeleton(false);
    }, 3000);
  }, [loading, page, data]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  if (error) {
    return (
      <main>
        <div className="section-title">
          <h1>{error}</h1>
          <div className="underline"></div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination project"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {!loadingSkeleton
            ? followers.map((follower) => {
                return <Follower key={follower.id} {...follower} />;
              })
            : followers.map((follower) => {
                return <FollowerSkeleton key={follower.id} />;
              })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}

            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
