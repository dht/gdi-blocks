import { ContactDriver } from './Contact.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Contact', () => {
    let driver: ContactDriver;

    beforeAll(() => {
        driver = new ContactDriver();
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

        expect(containerClassName).toContain('Contact-container');
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

describe('Contact snapshots', () => {
    let driver: ContactDriver;

    beforeAll(() => {
        driver = new ContactDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
