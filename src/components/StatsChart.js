import React from 'react'
import {PolarArea} from 'react-chartjs-2'

export const StatsChart = (props) => {
    
    const {data} = props;
    const stats = data?.map((stat) => stat.base_stat);

    return (
        <div>
           <PolarArea 
            data={{
                labels: ['HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense', 'Speed'],
                datasets:[
                    {
                        label: ['HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense', 'Speed'],
                        data: stats,
                        backgroundColor:[
                            'rgba(63, 202, 32, 0.5)',
                            'rgba(207, 24, 26, 0.5)',
                            'rgba(239, 219, 111, 0.5)',
                            'rgba(62, 95, 238, 0.5)',
                            'rgba(44, 205, 197, 0.5)',
                            'rgba(238, 128, 58, 0.5)',
                        ]
                    }
                ]
            }}
            height={400}
            width={300}
            options={{ maintainAspectRatio: false }}
           /> 
        </div>
    )
}
