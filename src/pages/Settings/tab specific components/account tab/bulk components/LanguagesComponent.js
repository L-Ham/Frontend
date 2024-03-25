import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, Typography, Paper} from '@mui/material';

/**
 * Provides an interface for selecting a language setting.
 *
 * This component allows users to choose their preferred display language for the interface.
 * It's part of a beta feature where the selection does not affect user-generated content.
 * The chosen language only applies to the UI elements of the platform.
 *
 * @return {JSX.Element} The LanguageSettings component.
 */
export function LanguageSettings() {
    const [language, setLanguage] = React.useState('en-US');

    /**
   * Handles the change in language selection.
   *
   * @param {React.ChangeEvent<{ value: unknown }>} event - The change event on the select element.
   */
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        console.log(`${event.target.value} is now selected`);
    // alert(`${event.target.value} is now selected`);
    };

    const styles = {
        paper: {
            padding: '20px 0px',
            width: '100%',
            margin: 'auto',
            textAlign: 'left',
        },
        betaLabel: {
            color: 'red',
            fontWeight: 'bold',
        },
        heading: {
            fontWeight: 'bold',
        },
        description: {
            color: 'rgba(0, 0, 0, 0.54)',
            marginBottom: '16px',
            fontFamily: 'Arial, sans-serif',
        },
        formControl: {
            textAlign: 'left',
        },
    };

    return (
        <Paper style={styles.paper}>
            <Typography variant="subtitle1" style={styles.heading}>
        Display language <span style={styles.betaLabel}>(beta)</span>
            </Typography>
            <Typography variant="body2" style={styles.description}>
            Select the language you&apos;d like to experience the interface in. Note that this won&apos;t change the
            language of user-generated content and that this feature is still in development so translations and UI
            are still under review.
            </Typography>
            <FormControl fullWidth style={styles.formControl}>
                <InputLabel id="language-select-label">Language</InputLabel>
                <Select
                    style={{maxWidth: '200px'}}
                    labelId="language-select-label"
                    id="language-select"
                    value={language}
                    label="Language"
                    onChange={handleLanguageChange}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                        },
                        getContentAnchorEl: null,
                    }}
                >
                    <MenuItem value="en-US">English (US)</MenuItem>
                    <MenuItem value="es-ES">Spanish (ES)</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
}
