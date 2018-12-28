use sitepoint;
select a.dayofWeek, b.dayofWeek, a.DoW from dayofweekLookup a, SailingLoads b where a.dayofWeek = b.dayofWeek 
