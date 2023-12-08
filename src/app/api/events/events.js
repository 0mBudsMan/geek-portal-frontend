export async function FetchedEvents(){
  
    const response = await fetch(
      'http://localhost:4000/api/v1/events/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
           
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const feventsData = await response.json();
    console.log(feventsData);


    return feventsData;

}





export async function FetchedEventLeaderbaord(){
  
    const response = await fetch(
      "http://localhost:4000/api/v1/events/opencode'23/leaderboard",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
           
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const feventLeaderData = await response.json();
    console.log(feventLeaderData);


    return feventLeaderData;

}




