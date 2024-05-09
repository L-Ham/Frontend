import {render, fireEvent} from '@testing-library/react';
import {UploadArea} from '../../../pages/subreddit/CommunityAppearance/components/uploadarea';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext';
import {useNotifications} from '../../../generic components/Notifications/notificationsContext';

jest.mock('../../../pages/subreddit/subredditcontext', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../generic components/Notifications/notificationsContext', () => ({
    useNotifications: jest.fn(),
}));

describe('UploadArea', () => {
    beforeEach(() => {
        useSubreddit.mockReturnValue({
            isUploadBannerVisible: true,
            isUploadAvatarVisible: false,
            about: {communityDetails: {name: 'test', subredditId: '1'}},
            setAbout: jest.fn(),
        });
        useNotifications.mockReturnValue({
            addNotification: jest.fn(() => {
                return <div data-testid="file-error" />;
            }),
        });
    });

    it('renders without crashing', () => {
        render(<UploadArea />);
    });

    it('renders the drop area and file input', () => {
        const {getByTestId} = render(<UploadArea />);
        expect(getByTestId('drop-area')).toBeInTheDocument();
        expect(getByTestId('file-input')).toBeInTheDocument();
    });

    it('calls useSubreddit and useNotifications hooks', () => {
        render(<UploadArea />);
        expect(useSubreddit).toHaveBeenCalled();
        expect(useNotifications).toHaveBeenCalled();
    });

    it('opens file input on div click', () => {
        const {getByTestId} = render(<UploadArea />);
        fireEvent.click(getByTestId('drop-area'));
        expect(getByTestId('file-input')).toBeTruthy();
    });
});
