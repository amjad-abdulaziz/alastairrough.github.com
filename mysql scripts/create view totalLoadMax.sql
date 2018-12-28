CREATE VIEW `totalLoadMax` AS
    SELECT 
        MAX(CAST(totalLoad AS UNSIGNED)),
        Departing,
        CaptureDate,
        sailingTime,
        dayofWeek
    FROM
        `sitepoint`.`SailingLoads`
    GROUP BY Departing , CaptureDate , sailingTime, dayofWeek
