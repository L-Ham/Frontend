import {render, fireEvent} from '@testing-library/react';
import {CommunityAppearance} from '../../../pages/subreddit/CommunityAppearance/communityappearance.js';
import React from 'react';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext.js';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../pages/subreddit/CommunityAppearance/components/iconbutton', () => ({
    __esModule: true,
    IconButton: () => {
        return <button data-testid="icon-button"/>;
    },
}));
jest.mock('../../../pages/subreddit/CommunityAppearance/components/uploadarea', () => ({
    __esModule: true,
    UploadArea: () => {
        return <div data-testid="upload-area"/>;
    },
}));
jest.mock('../../../pages/subreddit/CommunityAppearance/components/ListItem.js', () => ({
    __esModule: true,
    ListItem: () => {
        return <li data-testid="list-item"/>;
    },
}));
jest.mock('../../../pages/subreddit/CommunityAppearance/components/svgicon', () => ({
    __esModule: true,
    SvgIcon: () => {
        return <svg data-testid="svg-icon"/>;
    },
}));

describe('CommunityAppearance', () => {
    beforeEach(() => {
        useSubreddit.mockReturnValue({
            setIsUploadAvatarVisible: jest.fn(),
            setIsUploadBannerVisible: jest.fn(),
            setIsAppearanceSettingsVisible: jest.fn(),
            isUploadBannerVisible: false,
            isUploadAvatarVisible: false,
        });
    });

    it('renders without crashing', () => {
        render(<CommunityAppearance />);
    });

    it('renders community appearance container', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('community-appearance-container')).toBeInTheDocument();
    });

    it('renders header container', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('header-container')).toBeInTheDocument();
    });

    it('renders header title', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('header-title')).toBeInTheDocument();
    });

    it('renders button container', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('button-container')).toBeInTheDocument();
    });

    // it('renders dock button', () => {
    //     const {getByTestId} = render(<CommunityAppearance />);
    //     expect(getByTestId('dock-button')).toBeInTheDocument();
    // });

    // it('renders close button', () => {
    //     const {getByTestId} = render(<CommunityAppearance />);
    //     expect(getByTestId('close-button')).toBeInTheDocument();
    // });

    it('renders settings container', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('settings-container')).toBeInTheDocument();
    });

    it('renders settings list', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('settings-list')).toBeInTheDocument();
    });

    it('renders settings divider', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('settings-divider')).toBeInTheDocument();
    });

    it('renders dark mode container', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('dark-mode-container')).toBeInTheDocument();
    });

    it('renders dark mode toggle', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('dark-mode-toggle')).toBeInTheDocument();
    });

    it('renders dark mode label', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('dark-mode-label')).toBeInTheDocument();
    });

    it('renders dark mode icon', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('dark-mode-icon')).toBeInTheDocument();
    });

    it('renders dark mode text', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('dark-mode-text')).toBeInTheDocument();
    });

    it('renders dark mode checkbox', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('dark-mode-checkbox')).toBeInTheDocument();
    });

    it('renders upload area when isUploadAvatarVisible or isUploadBannerVisible is true', () => {
        useSubreddit.mockReturnValue({
            setIsUploadAvatarVisible: jest.fn(),
            setIsUploadBannerVisible: jest.fn(),
            setIsAppearanceSettingsVisible: jest.fn(),
            isUploadBannerVisible: true,
            isUploadAvatarVisible: false,
        });
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('upload-area')).toBeInTheDocument();
    });

    // it('renders list item', () => {
    //     const {getByTestId} = render(<CommunityAppearance />);
    //     expect(getByTestId('list-item')).toBeInTheDocument();
    // });

    it('renders svg icon', () => {
        const {getByTestId} = render(<CommunityAppearance />);
        expect(getByTestId('svg-icon')).toBeInTheDocument();
    });

    // it('renders icon button', () => {
    //     const {getByTestId} = render(<CommunityAppearance />);
    //     expect(getByTestId('icon-button')).toBeInTheDocument();
    // });
});
