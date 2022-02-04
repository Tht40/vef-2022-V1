import  { describe, expect, it } from '@jest/globals';
import {parse } from '..src/parser'

describe('parser', () => {
    it('parses a file to a number', () => {
        const input = `/[0-9]/`

        const parsed = parse(input);

        expect(parsed).toBe(/[0-9]/);
    });
});