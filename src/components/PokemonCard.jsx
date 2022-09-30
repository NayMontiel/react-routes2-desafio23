import React from "react";

const PokemonCard = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;

  return (
    <>
      <div className="card mb-2 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={src}
              className="img-fluid rounded-start mx-5 mt-5 animate__animated animate__swing"
              alt={name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title animate__animated animate__swing"style={{ textTransform: 'uppercase'}}>{name}</h5>
              <div className="card-text text-left mx-5 animate__animated animate__swing">
                {stats?.map((stat, i) => (
                  <p key={i}>
                    <strong>{stat.name}</strong> : {stat.base}
                  </p>
                ))}
              </div>
              <p className="card-text text-secondary animate__animated animate__swing">{types}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
