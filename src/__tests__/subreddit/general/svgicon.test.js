import {render} from '@testing-library/react';
import {SvgIcon} from '../../../pages/subreddit/CommunityAppearance/components/svgicon';

jest.mock('../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

describe('SvgIcon', () => {
    const svgPath = <path d="M10 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>;
    const viewBox = '0 0 20 20';

    test('renders without crashing', () => {
        render(<SvgIcon>{svgPath}</SvgIcon>);
    });

    test('renders correct children', () => {
        const {getByTestId} = render(<SvgIcon>{svgPath}</SvgIcon>);
        expect(getByTestId('svg-icon')).toContainHTML('<path d="M10 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>');
    });

    test('uses correct viewBox', () => {
        const {getByTestId} = render(<SvgIcon viewBox={viewBox}>{svgPath}</SvgIcon>);
        expect(getByTestId('svg-icon')).toHaveAttribute('viewBox', viewBox);
    });

    test('renders with correct data-testid', () => {
        const {getByTestId} = render(<SvgIcon>{svgPath}</SvgIcon>);
        expect(getByTestId('svg-icon')).toBeInTheDocument();
    });

    // Repeat tests with different props for maximum coverage
    const svgPaths = [
        <path d="M10 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M5 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M6 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M7 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M8 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M9 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M10 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M11 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M12 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M13 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,
        <path d="M14 20v-6h6v6h-6zm0-8h6V6h-6v6zM4 14h6v6H4v-6zm0-8h6v6H4V6z"/>,

    ];

    const viewBoxes = [
        '0 0 20 20',
        '0 0 30 30',
        '0 0 40 40',
        '0 0 50 50',
        '0 0 60 60',
        '0 0 70 70',
        '0 0 80 80',
        '0 0 90 90',
        '0 0 100 100',
        '0 0 110 110',
        '0 0 120 120',
        '0 0 130 130',
    ];

    svgPaths.forEach((svgPath, index) => {
        test(`renders without crashing - test ${index}`, () => {
            render(<SvgIcon>{svgPath}</SvgIcon>);
        });

        test(`uses correct viewBox - test ${index}`, () => {
            const {getByTestId} = render(<SvgIcon viewBox={viewBoxes[index]}>{svgPath}</SvgIcon>);
            expect(getByTestId('svg-icon')).toHaveAttribute('viewBox', viewBoxes[index]);
        });

        test(`renders with correct data-test-id - test ${index}`, () => {
            const {getByTestId} = render(<SvgIcon>{svgPath}</SvgIcon>);
            expect(getByTestId('svg-icon')).toBeInTheDocument();
        });
    });
});
