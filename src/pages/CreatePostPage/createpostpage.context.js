import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const CreatePostPageContext = createContext();

/* eslint-disable-next-line*/
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzEzMDIzOTgyLjc3ODA5LCJpYXQiOjE3MTI5Mzc1ODIuNzc4MDksImp0aSI6InhMeVhvTGRaSE54dFhseWpCV29FQnZ3TlVLajBZQSIsImNpZCI6Ijl0TG9GMHNvcDVSSmdBIiwibGlkIjoidDJfdHpzaGE5MGU5IiwiYWlkIjoidDJfdHpzaGE5MGU5IiwibGNhIjoxNzA3Njc5NTM1MDYzLCJzY3AiOiJlSnhra1ZGdTlEQUloT19pNTV6Z3Y4cXZxbkpzc290cW13aHdWbnY3aXRoa0lfVnRZTDVnbVB3UE8ySllRc3dDR1hVb2hwakRFcUJHTE5aSmlYb3pMekhrakNwbURub3JFVGtzNFltaXhPLXdCTXpRRk5Wa3dRTnFiUEVCWVFtVmNxSzI0ZVBTeXJoMkpaYlI4VkdWY3FGSnpRMHE1VVk2cDVBLXdiX1pTWFJLZ2JJTnBSeTNEZE1vWHZoajk5VzM5UFd6X2M1NFJJVUtJdkVCMXBrM00tekVkcGpFdzk0VDVaNjBNMlRSZHpsSjZXczliNWUtU21KY2pUdkdldmJhVE1ia0hKcWVVZl9kOVl2eHhEM1B5X1RhZ1Jtci0xNjY3Vm03ZjlVT1ZNckFVWW1kLURRY3VYTDV0bDhDN2RyMHIzSDd4QTdmRmFuSkRiODFIYlZjbkRqMU1MNS1Bd0FBX185VmU5N2oiLCJyY2lkIjoiLUdpalk5eWxENmFZcno4amxqU3dmUVpQU1lPb1hzMUFZUFJFVHJSb0dmVSIsImZsbyI6Mn0.Tx4rDTZQpmmV35TM9SjkwZ5UhK9xRz8cRD1Vqzwece9792uWNR_i8Qc7WdoKkdOMu3QS7VbF58wRHew8p-kjzPGXdIV6u9Hepyn8jcLSYnZKYYgWsP-WHezgmqyOhfFcNzoDVVgHSXomL4pvG3vC_usr7GTSpGJf2-fxGhUlXo_NWkhe7L-NiM2Z9KO5K-17Bo7U0NMP5dtIuYJ9vvPmcsWEArzZ9RqiCm1B0cOpjTeIt_Ik8ShDMa3C6sMbVypV44tBp1cTrqzz7MDcQGjjUrJ2fiMfq_gXCyWigLyzUPSOsUDzzD8Kd2XOJ-ovQoXFBrAwnzVh48DGAwX2sw9-tg";

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 `+
`(KHTML, like Gecko) Chrome/123.0.0.0`;

/**
 * Custom hook for using the subreddit context.
 * @return {Object} The subreddit context.
 */
export function useCreatePostPage() {
    return useContext(CreatePostPageContext);
}

/**
 * Subreddit provider component.
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CreatePostPageProvider({children, name}) {
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);
    const [rules, setRules] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const aboutData = await fetchSubredditAbout(name);
                setAbout(aboutData);

                const rulesData = await fetchSubredditRules(name);
                setRules(rulesData);

                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch subreddit data', error);
                setLoading(false);
            }
        };

        loadData();
    }, [name]);

    // The value that will be supplied to any descendants of this provider.
    const value = {
        loading,
        name,
        about,
        rules,
    };

    return (
        <CreatePostPageContext.Provider value={value}>
            {children}
        </CreatePostPageContext.Provider>
    );
}

CreatePostPageProvider.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
};


/**
 * Fetches the subreddit about from the Reddit API.
 * @param {string} name The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The subreddit about.
 * */
const fetchSubredditAbout = async (name) => {
    const response = await fetch(`https://oauth.reddit.com/r/${name}/about`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': userAgent,
        },
    });
    const data = await response.json();
    return data;
};

/**
 * Fetches the subreddit rules from the Reddit API.
 * @param {string} name The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The subreddit rules.
 * */
const fetchSubredditRules = async (name) => {
    const response = await fetch(`https://oauth.reddit.com/r/${name}/about/rules`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': userAgent,
        },
    });
    const data = await response.json();
    return data;
};

