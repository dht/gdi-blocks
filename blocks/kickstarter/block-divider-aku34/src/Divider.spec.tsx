import { DividerDriver } from './Divider.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Divider', () => {
    let driver: DividerDriver;

    beforeAll(() => {
        driver = new DividerDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('Divider-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('Divider snapshots', () => {
    let driver: DividerDriver;

    beforeAll(() => {
        driver = new DividerDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
