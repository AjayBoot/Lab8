import { TestScheduler } from '@jest/core';
import { pushToHistory } from '../scripts/router.js';

/**
 * @jest-environment jsdom
 */

test( 'Testing setting the settings page as a new state...', () =>{

    pushToHistory('settings');
    
    expect(history.length).toBe(2);

    expect(window.location.hash).toBe('#settings');
});

test( 'Testing setting the entry page as a new state...', () =>{

    pushToHistory('entry',1);
    
    expect(history.length).toBe(3);

    expect(window.location.hash).toBe('#entry1');
});

test( 'Testing setting the home page as a new state...', () =>{

    pushToHistory('home');
    
    expect(history.length).toBe(4);

    expect(window.location.hash).toBe('');
});