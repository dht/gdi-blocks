import { NumbersDriver } from './Numbers.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Numbers', () => {
    let driver: NumbersDriver;

    beforeAll(() => {
        driver = new NumbersDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const containerClassName = element.get.containerClassName();
        const innerText = element.get.label();

        expect(containerClassName).toContain('Numbers-container');
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

describe('Numbers snapshots', () => {
    let driver: NumbersDriver;

    beforeAll(() => {
        driver = new NumbersDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
