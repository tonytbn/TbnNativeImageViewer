import { createElement, useEffect } from "react";
import { View } from "react-native";
import { Image } from "mendix/components/native/Image";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export function ImgViewer({ getBased64, style }) {
    const styles = mergeNativeStyles(defaultStyle, style);
    useEffect(() => {}, [getBased64]);

    if (getBased64) {
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: `data:image/png;base64, ${getBased64}` }} />
            </View>
        );
    }
}
