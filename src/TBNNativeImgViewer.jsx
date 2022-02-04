import { createElement, useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";

const w = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export function TBNNativeImgViewer({ based64, imgW, imgH }) {
    const [imageW, setImageW] = useState(null);
    const [imageH, setImageH] = useState(null);
    const [baseImg, setBaseImg] = useState(null);

    useEffect(() => {
        if (based64.value) {
            setBaseImg(based64.value);
        }
    }, [based64]);

    useEffect(() => {
        if (imgW.value) {
            setImageW(parseInt(imgW.value));
        }
    }, [imgW]);

    useEffect(() => {
        if (imgH.value) {
            setImageH(parseInt(imgH.value));
        }
    }, [imgH]);

    if (imageW && imageH && baseImg) {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: `data:image/png;base64, ${baseImg}`
                    }}
                    style={{ width: imageW, height: imageH }}
                    resizeMode="cover"
                />
            </View>
        );
    }
}
