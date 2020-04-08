import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from 'src/components';
import Container from 'src/containers/Container';
import {margin} from 'src/components/config/spacing';
import {lineHeights} from 'src/components/config';

const ContainerTerm = () => {
    const { t } = useTranslation();

    return (
        <ScrollView>
            <Container>
                <Text h2 medium style={styles.title}>
                    {t('common:text_term')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_1')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_1')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_2')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_2')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_3')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_3')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_4')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_4')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_5')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_5')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_6')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_6')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_7')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_7')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_8')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_8')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_9')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_9')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_10')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_10')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_11')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_11')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_12')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_12')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_13')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_13')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_14')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_14')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_15')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_15')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_16')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_16')}
                </Text>
                <Text h4 style={styles.titleList}>
                    {t('profile:text_term_title_17')}
                </Text>
                <Text colorSecondary style={styles.description}>
                    {t('profile:text_term_description_17')}
                </Text>
            </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: margin.big,
    },
    titleList: {
        marginBottom: margin.base + 4,
    },
    description: {
        marginBottom: 50,
        lineHeight: lineHeights.h4,
        textAlign: "justify",
    },
});

export default ContainerTerm;
