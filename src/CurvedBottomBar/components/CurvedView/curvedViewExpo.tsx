import React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { CurvedView } from './model';

export const CurvedContainer: CurvedView = (props) => {
  const { style, width, height, bgColor, path } = props;

  return (
    <View style={style}>
      <Svg width={width} height={height}>
        <Path fill={bgColor} {...{ d: path }} />
      </Svg>
    </View>
  );
};

export const CurvedViewComponent = React.memo(CurvedContainer);
