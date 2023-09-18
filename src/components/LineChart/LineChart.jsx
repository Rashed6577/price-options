import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const LineChart = () => {

    const subjectsMarksData = [
        { "id": 1, "name": "Alice", "math": 65, "physics": 78, "chemistry": 60 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 62, "chemistry": 85 },
        { "id": 3, "name": "Carol", "math": 52, "physics": 68, "chemistry": 72 },
        { "id": 4, "name": "David", "math": 88, "physics": 56, "chemistry": 78 },
        { "id": 5, "name": "Emma", "math": 46, "physics": 70, "chemistry": 54 },
        { "id": 6, "name": "Frank", "math": 94, "physics": 74, "chemistry": 77 },
        { "id": 7, "name": "Grace", "math": 40, "physics": 92, "chemistry": 69 },
        { "id": 8, "name": "Henry", "math": 62, "physics": 75, "chemistry": 54 },
        { "id": 9, "name": "Isabelle", "math": 79, "physics": 47, "chemistry": 71 },
        { "id": 10, "name": "Jack", "math": 71, "physics": 46, "chemistry": 88 }
      ];
      


    return (
        <div className='container mx-auto my-14'>
            <LChart width={1200} height={400} data={subjectsMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;