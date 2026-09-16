import formatCurrency from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
    describe('test type: format odds', () => {
        it('bigger than 0', () =>
            expect(formatCurrency(1)).toEqual('0.01')
        );
        it('smaller than 0', () =>
            expect(formatCurrency(-11)).toEqual('-0.11')
        );
    })

    it('converts cents into dollars', () =>
        expect(formatCurrency(2095)).toEqual('20.95')
    );

    it('works with 0', () =>
        expect(formatCurrency(0)).toEqual('0.00')
    );

    it('rounds up to the nearest cent', () =>
        expect(formatCurrency(2000.5)).toEqual('20.01')
    );

});