import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts'


const BarChartData = () => {

    const pageData = [
        { "name": "Page 1", "male": 5000, "female": 6000 },
        { "name": "Page 2", "male": 4500, "female": 5500 },
        { "name": "Page 3", "male": 9200, "female": 7000 },
        { "name": "Page 4", "male": 7600, "female": 8700 },
        { "name": "Page 5", "male": 5500, "female": 6500 },
        { "name": "Page 6", "male": 4800, "female": 5800 },
        { "name": "Page 7", "male": 6200, "female": 7200 },
        { "name": "Page 8", "male": 6800, "female": 4800 },
        { "name": "Page 9", "male": 3100, "female": 5100 },
        { "name": "Page 10", "male": 2300, "female": 3300 }
    ]



    return (
        <div className='container mx-auto my-14'>
            <BarChart width={1200} height={400} data={pageData}>
                <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={'male'} fill='#8884d8'></Bar>
                <Bar dataKey={'female'} fill='#82ca9d'></Bar>
            </BarChart>
        </div>
    );
};

export default BarChartData;