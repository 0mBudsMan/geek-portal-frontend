const LEADERBOARD_API_URL = "http://localhost:4000/api/v1/events/";
type RowObj = {
	position:number;
	name: string;
	prmerged: string;
	githubid: string;
	points: string;
  avatarUrl: string,
  prDetailsURL: string
};

export const FetchedLeaderboard = async (eventName: string): Promise<RowObj[]> => {
  try {
    const response = await fetch(`${LEADERBOARD_API_URL}/${eventName}/leaderboard`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch leaderboard data: ${response.statusText}`);
    }

    const Leaddata = await response.json();
  
    // console.log(Leaddata.data);
    // Assuming the API returns an array of leaderboard data
    return Leaddata.data as RowObj[];

  
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error; 
  }
};



