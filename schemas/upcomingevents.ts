import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'upcomingevents',
    title: 'Upcoming Events',
    type: 'document',
    fields: [
        defineField({
            name: 'eventname',
            title: 'Event Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'eventname' }
        }),
        defineField({
            name: 'countdown',
            title: 'Countdown',
            type: 'number',
        }),
        defineField({
            name: 'startdate',
            title: 'Start Date',
            type: 'string',
        }),
        defineField({
            name: 'player',
            title: 'Number of Player',
            type: 'number',
        }),
        defineField({
            name: 'prizepool',
            title: 'Prize Pool',
            type: 'number',
        }),
        defineField({
            name: 'organizer',
            title: 'Organizer',
            type: 'string'
        }),
        defineField({
            name: 'participationfee',
            title: 'Participation Fee',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'gametype',
            title: 'Game Type',
            type: 'string',
            options: {
                // type: 'string',
                list: ['ea-fc-24', 'fortnite', 'tekken-7', 'counter-strike-go', 'clash-royal', 'pubg-mobile', 'valorant', 'rocket-league', 'street-fighter-6', 'overwatch-2', 'brawl-stars', 'mobile-legends', 'dota-2', 'minecraft', 'fifa-23'],
            }
        })
    ],
})
