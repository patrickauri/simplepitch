import React from 'react'
import { GetPitchTypeName, ParseNHK } from '../config/Utilities'

export default function PitchCard({ data }: any) {
    const parsedData = ParseNHK(data)

    return (
        <div className='card'>
            <div className='card-top'>
                <div className='card-title'>{data['Word 1A']}</div>
                <div className='card-number'>{parsedData.pitchNumber}</div>
            </div>
            <div className='card-reading'>{parsedData.reading}</div>
            <div className='card-bottom'>
                {GetPitchTypeName(parsedData.pitchType)}
            </div>
        </div>
    )
}
