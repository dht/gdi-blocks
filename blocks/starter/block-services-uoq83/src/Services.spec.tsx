import { ServicesDriver } from './Services.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Services', () => {
    let driver: ServicesDriver;

    beforeAll(() => {
        driver = new ServicesDriver();
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

        expect(containerClassName).toContain('Services-container');
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

describe('Services snapshots', () => {
    let driver: ServicesDriver;

    beforeAll(() => {
        driver = new ServicesDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
