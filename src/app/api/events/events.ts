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


const LEADERBOARD_API_URL = "http://localhost:4000/api/v1/events/opencode'23/leaderboard";

export const FetchedLeaderboard = async (eventName: string): Promise<RowObj[]> => {
  try {
    const response = await fetch(`${LEADERBOARD_API_URL}?eventName=${eventName}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch leaderboard data: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Assuming the API returns an array of leaderboard data
    return data as RowObj[];
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error; // Propagate the error to the caller
  }
};


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