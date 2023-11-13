type RowObj = {
	position:number;
	name: string;
	prmerged: string;
	githubid: string;
	points: string; 
};

const tableDataColumns: RowObj[] = [
	{	
		position:1,
		name: 'Akshay Waghmare',
		githubid: 'akshayw1',
		prmerged: '99',
		points: '232', 
	},
	{
		position:2,
		name:'Shashank Patil',
		githubid: 'shashankpatil28',
		prmerged: '77',
		points: '219', 
	},
	{
		position:3,
		name: 'Om Buddhadev',
		githubid: 'ombuddamsn',
		prmerged: '32',
		points: '200', 
	},
	{
		position:4,
		name: 'Bhupendra Jogi',
		githubid: 'bhupendraJogi',
		prmerged: '21',
		points: '199', 
	}, 
];

export default tableDataColumns;
