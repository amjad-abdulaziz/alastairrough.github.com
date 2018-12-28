CREATE TABLE SailingLoads_stage (
  id int(11) NOT NULL AUTO_INCREMENT,
  CaptureDate varchar(50),
  CaptureTime varchar(50), 
  dayofWeek varchar(50),
  Departing varchar(50),
  totalLoad varchar(50),
  carLoad varchar(50),
  oversizeLoad varchar(50),
  sailingTime varchar(50),
  PRIMARY KEY (id)
  ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO SailingLoads_stage (id, CaptureDate, CaptureTime, dayofWeek, Departing, totalLoad, carLoad, oversizeLoad, sailingTime) VALUES
(1, '2017-2-5','1630','0','HSB','6','1','11','1435'),
(2, '2017-2-5','1630','0','HSB','1','0','2','1550'),
(3, '2017-2-5','1630','0','HSB','1','3','0','1650'),
(4, '2017-2-5','1630','0','LNG','3','3','3','1445'),
(5, '2017-2-5','1630','0','LNG','0','0','0','1545'),
(6, '2017-2-5','1630','0','LNG','1','1','1','1650');