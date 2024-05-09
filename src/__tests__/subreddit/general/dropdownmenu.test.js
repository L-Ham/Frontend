import {render, screen} from '@testing-library/react';
import {DropdownMenu} from '../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.js';
import {useDropdownMenu} from '.../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.hooks.js';

jest.mock('../../../pages/subreddit/General/Components/DropdownMenu/DropdownMenuItem/dropdownmenuitem.js', () => ({
    __esModule: true,
    DropdownMenuItem: ({text, onClick, icon, isActive}) => {
        return <div data-testid='dropdown-menu-item' className={`${isActive ? 'active' : ''}`}>{text}</div>;
    },
}));

jest.mock('../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.hooks.js', () => ({
    useDropdownMenu: jest.fn(),
}));

describe('DropdownMenu', () => {
    beforeEach(() => {
        useDropdownMenu.mockReturnValue({
            processedItems: [
                {text: 'Hot', onClick: () => {}, icon: 'hot', isActive: true},
                {text: 'New', onClick: () => {}, icon: 'new', isActive: false},
                {text: 'Top', onClick: () => {}, icon: 'top', isActive: false},
            ],
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the dropdown menu with correct items', () => {
        render(<DropdownMenu items={
            [
                {text: 'Hot', onClick: () => {}, icon: 'hot', isActive: true},
                {text: 'New', onClick: () => {}, icon: 'new', isActive: false},
                {text: 'Top', onClick: () => {}, icon: 'top', isActive: false},
            ]
        } position='top-50'/>);

        const updatedDropdownItems = screen.queryAllByTestId('dropdown-menu-item');
        expect(updatedDropdownItems).toHaveLength(3);
    });
});
