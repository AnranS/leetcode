package problem0003

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type para struct {
	baseString string
}

type ans struct {
	res int
}

type question struct {
	p para
	a ans
}

func TestOk(t *testing.T) {

	ast := assert.New(t)

	qs := []question{
		question{
			p: para{
				baseString: "abcabcbb",
			},
			a: ans{
				res: 3,
			},
		},
		question{
			p: para{
				baseString: "bbbbb",
			},
			a: ans{
				res: 1,
			},
		},
		question{
			p: para{
				baseString: "pwwkew",
			},
			a: ans{
				res: 3,
			},
		},
	}

	for _, q := range qs {
		a, p := q.a, q.p
		ast.Equal(a.res, lengthOfLongestSubstring(p.baseString), "输入:%v", p)
	}
}
