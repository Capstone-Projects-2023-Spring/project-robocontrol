import unittest
import functions


class TestFunctions(unittest.TestCase):

    def test_pwmGenOut(self):
        self.assertEqual(functions.pwmGenOut(0), 0)
        self.assertEqual(functions.pwmGenOut(90), 230)
        self.assertEqual(functions.pwmGenOut(180), 460)

    def test_radarScan(self):
        functions.setup()
        result = functions.Functions().radarScan()
        self.assertIsInstance(result, list)

    def test_trackLineProcessing(self):
        functions.setup()
        functions.move.move(100, 'no', 'no', 0.1)
        functions.GPIO.output(functions.line_pin_right, 1)
        functions.GPIO.output(functions.line_pin_middle, 0)
        functions.GPIO.output(functions.line_pin_left, 1)
        functions.Functions().trackLineProcessing()
        self.assertEqual(functions.move.status, 'no_right')

if __name__ == '__main__':
    unittest.main()
