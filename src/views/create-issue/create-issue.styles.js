import {StyleSheet} from 'react-native';
import {UNIT, COLOR_PINK, COLOR_FONT_GRAY, COLOR_FONT, COLOR_GRAY} from '../../components/variables/variables';

const ATTACHING_IMAGE_ALPHA = '70';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  summaryInput: {
    margin: UNIT,
    padding: UNIT,
    color: COLOR_FONT,
    fontSize: 18,
    height: UNIT * 5
  },
  descriptionInput: {
    height: UNIT * 10,
    margin: UNIT,
    padding: UNIT,
    flex: 1,
    backgroundColor: '#FFF',
    color: COLOR_FONT,
    borderColor: 'black',
    textAlignVertical: 'top',
    fontSize: 14
  },
  disabledCreateButton: {
    color: COLOR_FONT_GRAY
  },
  creatingIndicator: {
    paddingTop: 4,
    width: 30,
    height: 20
  },
  separator: {
    height: 0.5,
    backgroundColor: COLOR_GRAY
  },
  attachesContainer: {
    margin: UNIT,
    marginLeft: UNIT * 2,
    marginRight: UNIT * 2
  },
  imageActivityIndicator: {
    backgroundColor: `#CCCCCC${ATTACHING_IMAGE_ALPHA}`,
    position: 'absolute',
    top: 0,
    left: 0,
    right: UNIT*2,
    bottom: 0
  },
  attachButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attachButton: {
    paddingTop: UNIT,
    paddingBottom: UNIT,
    flexDirection: 'row'
  },
  attachIcon: {
    marginRight: UNIT,
    width: 16,
    height: 16
  },
  attachButtonText: {
    color: COLOR_PINK,
    fontWeight: '200'
  },
  actionContainer: {
    flexDirection: 'row',
    margin: UNIT,
    marginLeft: UNIT * 2,
    marginRight: UNIT * 2
  },
  actionContent: {
    marginLeft: UNIT * 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionIcon: {
    width: 16,
    height: 16
  }
});
