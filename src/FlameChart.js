import React from 'react';
import {FixedSizeList as List} from 'react-window';
import {convertData} from './utils';

export default function FlameChart ({data, width, height}) {
	const listData = convertData(data);

	return (
		<List height={height} itemCount={listData.length} itemSize={35} width={width}>
			{({index, style}) => {
				const nodes = listData[index];

				return <div style={style}>
					{nodes.map((node, index) => (
						<div
							key={index}
							style={{
								position: 'absolute',
								left: node.offset * width,
								width: node.width * width,
								height: 30,
								lineHeight: '30px',
								backgroundColor: node.color,
								border: '1px solid white',
								boxSizing: 'border-box',
								textOverflow: 'ellipsis',
								overflow: 'hidden'
							}}
							title={node.name}
						>
							{node.name}
						</div>
					))}
				</div>
			}}
		</List>
	)
}
