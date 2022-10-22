const Details = () => {
  const countries = [
    {
      Country: 'Afghanistan',
      Date: '2022-10-21T18:09:47.252Z',
      NewConfirmed: 193,
      NewDeaths: 2,
      NewRecovered: 0,
      TotalConfirmed: 201750,
      TotalDeaths: 7814,

    },
  ];
  return (
    <div>

      <div className="background">
        {countries.map((data) => (
          <div key={data.ID}>

            <div className="Details">
              <div className="flex">
                <h2>Country</h2>
                <h2>{data.Country}</h2>
              </div>
              <div className="flex">
                <h2>Last Updated</h2>
                <h2 className="dt">{data.Date}</h2>
              </div>
              <div className="flex">
                <h2>New Confirmed Cases</h2>
                <h2>{data.NewConfirmed}</h2>
              </div>
              <div className="flex">
                <h2>New Deaths</h2>
                <h2>{data.NewDeaths}</h2>
              </div>
              <div className="flex">
                <h2>New Recovery</h2>
                <h2>{data.NewRecovered}</h2>
              </div>
              <div className="flex">
                <h2>Total Confirmed Cases</h2>
                <h2>{data.TotalConfirmed}</h2>
              </div>
              <div className="flex">
                <h2>Total Deaths</h2>
                <h2>{data.TotalDeaths}</h2>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Details;
