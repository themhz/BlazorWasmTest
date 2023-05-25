#include <emscripten.h>

typedef struct {
    int x;
    int y;
} Point;

Point point = {0, 0};

EMSCRIPTEN_KEEPALIVE
void update_position(int x, int y) {
    point.x = x;
    point.y = y;
}

EMSCRIPTEN_KEEPALIVE
Point *get_position() {
    return &point;
}
