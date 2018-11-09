import React, {PureComponent} from 'react';
import {FixedSizeList as List} from 'react-window';
import {convertData} from './utils';
import memoize from 'memoize-one';

const memoizedConverData = memoize(convertData);

const getItemData = memoize((listData, width) => ({
	listData,
	width,
}))

export default function FlameChart ({data, width, height}) {
	const listData = memoizedConverData(data);
	const itemData = getItemData(listData, width);

	return (
		<List
			height={height}
			itemCount={listData.length}
			itemSize={35}
			width={width}
			itemData={itemData}
		>
			{ListItem}
		</List>
	)
}

class ListItem extends PureComponent {
	render() {
		const {data, index, style} = this.props;
		const {listData, width} = data
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
	}
}
