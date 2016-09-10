import Vue from 'Vue'
import Navbar from '../../src/components/Navbar.vue'

describe('NavBar.vue', ()=> {
    it('should have correct user name',()=>{
        expect(Navbar.data().userName).toBe('sammiu');
    })
})